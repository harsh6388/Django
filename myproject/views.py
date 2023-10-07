from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
def func(request):
    return HttpResponse("<h1><i>HELLO WORLD</i></h1>")

def variable(request):
    template=loader.get_template("index.html")
    one={
        'context': 'harsh',
        'course':['c','c++','python','c#'],
        'details':[{'name':'A', 'class':"6A", 'Rollno': 1},
                   {'name':'B', 'class':"5A", 'Rollno': 11},
                   {'name':'C', 'class':"7A", 'Rollno': 12},
                   {'name':'D', 'class':"8A", 'Rollno': 14}],
        'nums':[90,91,98,88,87], 
        
        
        
    }
    return HttpResponse(template.render(one,request))
def test(request):
    return render(request,'about.html')
def dynamicurl(request,roll):
    return HttpResponse(roll)
def fv(request):
    return render(request, "form.html")
def home(request):
       return render(request,"home.html")
def contact(request):
       return render(request,"contact.html")

