from urllib import request
from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .products import products
from .serializers import ProductSerializer


from base.models import Product, Order, OrderItem, ShippingDetails
from base.serializers import ProductSerializer, OrderSerializer

from rest_framework import status, generics
from datetime import datetime

from rest_framework.views import APIView

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
       'api/products/',
       'api/products/create/',
       'api/products/upload/',
       'api/products/<id>/reviews/',
       'api/products/top/',
       'api/products/<id>/',
       'api/products/delete/<id>',
       'api/products/<update>/<id>',
      

    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

# class ShippingView(generics.ListAPIView):
#     query_set = ShippingDetails.objects.all()
#     serializer_class = ShippingSerializer

# class CreateShippingView(APIView):
#     serializer_class = CreateShippingSerializer
#     def post(self, request, format=None):
#         serializer = self.serializer_class(data= request.data)
#         if serializer.is_valid():
#             address1 = serializer.data.get('address1')
#             address2 = serializer.data.get('address2')
#             city = serializer.data.get('city')
#             email = serializer.data.get('email')
#             first_name = serializer.data.get('first_name')
#             last_name = serializer.data.get('last_name')
#             phone =serializer.data.get('phone')
#             shippingPrice=serializer.data.get('shippingPrice')
#             state = serializer.data.get('state')
#             zip = serializer.data.get('zip')

#             shipping_details = ShippingDetails(address1= address1, address2= address2, city= city, email= email,
#             first_name= first_name, last_name= last_name, phone= phone, shippingPrice= shippingPrice, state= state, zip= zip)
#             shipping_details.save()

#         return Response(status= status.HTTP_201_CREATED)



@api_view(['POST'])
def addOrderItems(request):
    
    data = request.data
    print(data)
    orderItems = data['order']

    if orderItems and len(orderItems) == 0:
        return Response({'detail': 'No Order Items'}, status=status.HTTP_400_BAD_REQUEST)
    else:

        # (1) Create order

        order = Order.objects.create(
            customer=data['shipping']['firstname'] + data['shipping']['lastname'],
            paymentMethod='paymentMethod',
            taxPrice=0.088*float(data['order']['totalAmount']),
            shippingPrice=data['shipping']['shipping'],
            totalAmount=float(data['order']['totalAmount'])+ float(0.088*data['order']['totalAmount']) + float(data['shipping']['shipping'])
        )

        # (2) Create shipping address

        shipping = ShippingDetails.objects.create(
            order=order,
            address1=data['shipping']['add1'],
            address2=data['shipping']['add2'],
            city=data['shipping']['city'],
            zip=data['shipping']['zip'],
            country='USA',
            email = data['shipping']['email'],
            first_name = data['shipping']['firstname'],
            last_name = data['shipping']['lastname'],
            phone = data['shipping']['phone'],
            state = data['shipping']['state'],
            shippingPrice = data['shipping']['shipping'],

        )

        # (3) Create order items adn set order to orderItem relationship
        for i in orderItems['products']:
            
            product = Product.objects.get(_id=i['_id'])

            item = OrderItem.objects.create(
                product=product,
                order=order,
                name=product.name,
                amount=i['amount'],
                price=i['price'],
                image=product.image.url,
            )

            # (4) Update stock

            product.countInStock -= i['amount']
            product.save()

        serializer = OrderSerializer(order, many=False)
        return Response(serializer.data)

# @api_view(['POST'])
# def create_order(request):
#     d = request.POST
#     print(d)
#     data = request.data
#     lst = []
#     json={}
#     for key in lst:
#         json.update({key:data[key]})
#         data.pop(key)

#     shipping_obj=ShippingDetails.create(**json)
#     shipping_obj = ShippingDetails.insert(shipping_obj)

#     order_obj = object.create(**data)
#     order_obj = object.insert(order_obj)

#     shipping_obj.order=order_obj
#     return Response(data=OrderSerializer(order_obj).data, status=201)