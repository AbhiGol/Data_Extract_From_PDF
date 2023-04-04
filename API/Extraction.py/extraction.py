import PyPDF2 as pdf2
import re
import tabula 
from pymongo import MongoClient


path = r'C:\Learning\project\Uploads\Invoice1.pdf' 
  
df = tabula.read_pdf(path, pages=1)
print(df)



file = open(path,"rb")
reader = pdf2.PdfFileReader(file)
page1 = reader.getPage(0)
#print(reader.numPages)
pdfData = page1.extractText()
print(pdfData)

# To find all Dates
pattern = "\\d{2}[/-]\\d{2}[/-]\\d{2}"
dates = re.findall(pattern, pdfData)
print(dates)


client = MongoClient('mongodb://dataextractproject:kiD69IBQn3j97JxXPhJOy0lOeYTyA8Trh6VWeTuYQHNWwtUWeELoLKQzPBL2eFA7xsUDKBNSbTE6ACDbTw4oPw==@dataextractproject.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@dataextractproject@')

db = client['DataExtract']
collection = db["todo"]

#a = collection.todo.find({ : ""})
#print(a)