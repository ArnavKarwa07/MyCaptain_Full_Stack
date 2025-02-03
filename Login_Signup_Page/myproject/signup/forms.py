from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class SignupForm(UserCreationForm):
    username = forms.CharField(
        max_length=30,
        min_length=1,
        required=True,
        widget=forms.TextInput(
            attrs={
                'placeholder': 'username',
                'class': 'form-control'
            }
        )
    )
    email = forms.EmailField(
        max_length=254,
        required=True,
        widget=forms.EmailInput(
            attrs={
                'placeholder': 'email@mail.com',
                'class': 'form-control'
            }
        )
    )
    dob = forms.CharField(
        widget=forms.DateInput(
            attrs={
                'type': 'date',
                'placeholder': 'yyyy-mm-dd(DOB)',
                'class': 'form-control'
            }
        )
    )
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    gender = forms.ChoiceField(
        choices=GENDER_CHOICES,
        initial='M'
    )
    class Meta:
        model = User
        fields = ('username', 'email', 'dob', 'gender')