from pydantic import BaseModel
from datetime import date

class Todo(BaseModel):
    name : str
    regular_expration : str
    field : str
    description :str
    created_date : str = date.today()
    
class Tamplate(BaseModel):
    name : str
    description : str
    created_date : str = date.today()