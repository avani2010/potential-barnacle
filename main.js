function preload()
{

}

function loaded()
{
    console.log("model loaded")
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.position(620,330);
    camera=createCapture(VIDEO);
    camera.hide();
    camera.position(620,330);
    identify=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YJAaa11zq/model.json',loaded);
}

function results(error,result)
{
    if(error)
    {
        console.error(error)
    }
    if(result)
    {
        console.log(result);
        document.getElementById("name").innerHTML=result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(2)*100;
    }
}

function draw()
{
    image(camera,0,0,300,300);
    identify.classify(camera,results);
}