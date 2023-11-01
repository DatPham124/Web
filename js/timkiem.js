
function TKP(event)
{
    var p= event.which || event.keyCode;
    if(p==32)
        Search-Tim();
}

function Tim()
{
    var frm= document.forms["search-form"];
    if(frm.contents.value.length>=1) frm.submit();
}

function TimKiem()
{
    var url = new URL(window.location);
    var ct = url.searchParams.get("contents");
    document.getElementById("detail").innerHTML="<p>Bạn đang tìm kiếm: \"<b>"+ct+"</b>\"</p>";
}
