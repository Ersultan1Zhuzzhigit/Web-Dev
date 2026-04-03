from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = list(Product.objects.filter(is_active=True, count__gt=0).values())
    return JsonResponse(products, safe=False)

def product_detail(request, id):
    product = Product.objects.filter(pk=id, is_active=True, count__gt=0).values().first()
    if product:
        return JsonResponse(product)
    return JsonResponse({'error': 'Not found'}, status=404)

def category_list(request):
    categories = list(Category.objects.values())
    return JsonResponse(categories, safe=False)

def category_detail(request, id):
    category = Category.objects.filter(pk=id).values().first()
    if category:
        return JsonResponse(category)
    return JsonResponse({'error': 'Not found'}, status=404)

def category_products(request, id):
    products = list(Product.objects.filter(category_id=id, is_active=True, count__gt=0).values())
    return JsonResponse(products, safe=False)