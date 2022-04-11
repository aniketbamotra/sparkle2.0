from django.urls import path
from . import views
#from .views import CreateShippingView
urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name="products"),
    path('products/<str:pk>/', views.getProduct, name="product"),
    path('create_order', views.addOrderItems, name="create_order")
]
