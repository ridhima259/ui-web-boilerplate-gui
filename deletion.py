import boto3
import os
from datetime import datetime
s3_resource=boto3.client("s3")
bucketname=os.environ['S3_BUCKET']
objects=s3_resource.list_objects(Bucket=bucketname)["Contents"]
count=0
x={}
count=0
li=[]
for object in objects:
    rawdate=object["LastModified"]
    rawdate=str(rawdate).replace("+00:00","")
    actualdate=datetime.strptime(rawdate,"%Y-%m-%d %H:%M:%S")
    actualdate=int(actualdate.timestamp())
    li.append(object["Key"])
    x.update({object["Key"].split("/")[0]:str(actualdate)+"/"+str(count)})
    count=count+1
print(count)

y=dict((v,k) for k,v in x.items())
print(x)
print(y)
dates=(list(y.keys()))
#print(dates)
if(len(dates)>3):
    dates.sort()
#print(dates)
index=len(dates)-3
to_be_deleted_index=dates[:index]
for del_obj in to_be_deleted_index:
    for xx in li:
        if y[del_obj] in xx:
            response=s3_resource.delete_object(Bucket=bucketname,Key=xx)
            print(f"{xx} is deleted")