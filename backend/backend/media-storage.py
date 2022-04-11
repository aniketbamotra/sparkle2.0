from storages.backends.s3boto3 import S3Boto3Storage

class MediaStorage(S3Boto3Storage):
    bucket_name = 'woodsy-static'
    custom_domain = '{}.s3.amazonaws.com'.format('woodsy-static')
    location = 'uploaded-media'
    file_overwrite = False