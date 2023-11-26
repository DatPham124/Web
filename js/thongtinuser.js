function img(){
    document.getElementById('upload-input').addEventListener('change', function() {
        var previewImage = document.getElementById('preview-image');
        var file = this.files[0];
    
        if (file) {
            var reader = new FileReader();
    
            reader.onload = function(e) {
                previewImage.src = e.target.result;
            };
    
            reader.readAsDataURL(file);
        }
    });
}