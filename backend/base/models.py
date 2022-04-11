from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Product(models.Model):
    user= models.ForeignKey(User, on_delete= models.SET_NULL, null= True)
    name= models.CharField(max_length=200, null= True, blank= True)
    image= models.ImageField(null=True, blank= True)
    image2= models.ImageField(null= True, blank= True)
    image3= models.ImageField(null= True, blank= True)
    image4= models.ImageField(null= True, blank= True)
    brand= models.CharField(max_length=200, null= True, blank= True)
    category= models.CharField(max_length=200, null= True, blank= True)
    description= models.TextField(null= True, blank= True)
    length= models.DecimalField(max_digits=7, decimal_places=2, null=True, blank= True)
    width= models.DecimalField(max_digits=7, decimal_places=2, null=True, blank= True)
    height= models.DecimalField(max_digits=7, decimal_places=2, null=True, blank= True)
    weight= models.DecimalField(max_digits=7, decimal_places=2, null=True, blank= True)
    rating= models.DecimalField(max_digits=7, decimal_places=2, null= True, blank= True)
    numReviews= models.IntegerField(null= True, blank= True, default=0)
    price= models.DecimalField(max_digits=7, decimal_places=2, null= True, blank= True)
    countInStock= models.IntegerField(null= True, blank= True, default=0)
    unitSold= models.IntegerField(null=True, blank=True, default=0)
    addedToCartAt= models.DateTimeField(auto_now_add=True)

    _id= models.AutoField(primary_key=True, editable=False)


    def __str__(self):
        return self.name



class Review(models.Model):
    product= models.ForeignKey(Product, on_delete= models.SET_NULL, null= True)
    user= models.ForeignKey(User, on_delete= models.SET_NULL, null= True)
    name= models.CharField(max_length=200, null= True, blank= True)
    rating= models.IntegerField(null= True, blank= True, default=0)
    comment= models.TextField(null= True, blank= True)
    _id= models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)

class Customer(models.Model):
    user= models.ForeignKey(User, null=True, default= True, on_delete=models.CASCADE)
    name= models.CharField(max_length=100)
    email= models.EmailField()
    phone= models.CharField(max_length=100)

    def __str__(self):
        return self.name    
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    customer= models.CharField(max_length=200, null= True, blank= True)
    paymentMethod= models.CharField(max_length=200, null= True, blank= True)
    taxPrice= models.DecimalField(max_digits=7, decimal_places=2, null= True, blank= True)
    shippingPrice= models.DecimalField(max_digits=7, decimal_places=2, null= True, blank= True)
    totalAmount= models.DecimalField(max_digits=7, decimal_places=2, null= True, blank= True)
    isPaid= models.BooleanField(default= False)
    paidAt= models.DateTimeField(auto_now_add= False, null= True, blank= True)
    isDelivered= models.BooleanField(default= False)
    deliveredAt=models.DateTimeField(auto_now_add= False, null= True, blank= True)
    createdAt= models.DateTimeField(auto_now_add= True)
    _id= models.AutoField(primary_key=True, editable=False)


    def __str__(self):
        return str(self._id)

class OrderItem(models.Model):
    product= models.ForeignKey(Product, on_delete= models.SET_NULL, null= True)
    order=  models.ForeignKey(Order, on_delete= models.SET_NULL, null= True)
    name= models.CharField(max_length=200, null= True, blank= True)
    amount= models.DecimalField(null= True, blank= True, default=0,decimal_places=2,max_digits=7)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    
    _id= models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name) +" "+ str(self.order)
    

class ShippingDetails(models.Model):
    order= models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank= True)
    address1= models.CharField(max_length=200, null= True, blank= True)
    address2= models.CharField(max_length=200, null= True, blank= True)
    city= models.CharField(max_length=200, null= True, blank= True)
    zip= models.CharField(max_length=5, null= True, blank= True)
    state = models.CharField(max_length=200, null= True, blank= True)
    email= models.EmailField()
    phone= models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    country= models.CharField(max_length=200, null= True, blank= True)
    shippingPrice= models.CharField(max_length=7, null= True, blank= True)
    _id= models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.address1





