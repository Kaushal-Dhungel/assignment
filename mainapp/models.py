from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=400,null= False, blank = False)
    roll_no = models.IntegerField(null= False, blank = False,unique= True)
    maths = models.DecimalField(max_digits= 5, decimal_places=2)
    physics = models.DecimalField(max_digits= 5, decimal_places=2)
    chemistry = models.DecimalField(max_digits= 5, decimal_places=2)
    percentage = models.DecimalField(max_digits=4,decimal_places= 2,null=True, blank=True)

    def save(self,*args, **kwargs):
        
        self.percentage = round((self.get_total_marks/300) * 100 ,2)
        super(Student,self).save(*args, **kwargs)

    @property
    def get_total_marks(self):
        return self.maths + self.physics + self.chemistry

    def __str__(self) -> str:
        return f'{self.name}--{self.roll_no}'

