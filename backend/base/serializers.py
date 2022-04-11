from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, ShippingDetails,OrderItem, Order

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model= Product
        fields= '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

# class ShippingSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ShippingDetails
#         fields = '__all__'

# class CreateShippingSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ShippingDetails
#         fields = ('address1','address2', 'city','email','first_name','last_name','phone','shippingPrice', 'state','zip')

class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingDetails
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    orderItems = serializers.SerializerMethodField(read_only=True)
    shippingAddress = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def get_orderItems(self, obj):
        items = obj.orderitem_set.all()
        serializer = OrderItemSerializer(items, many=True)
        return serializer.data

    def get_shippingAddress(self, obj):
        try:
            address = ShippingAddressSerializer(
                obj.shippingdetails, many=False).data
        except:
            address = False
        return address
    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data