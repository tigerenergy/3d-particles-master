import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
class Model 
{
    constructor(obj)
    {
        console.log(obj)
        this.name = obj.name
        this.file = obj.file

        this.loader = new GLTFLoader()
        this.dracoLoader = new DRACOLoader()
        this.dracoLoader.setDecoderPath('./draco/')
        this.loader.setDRACOLoader(this.dracoLoader)
        this.init()
    }

    init()
    {

    }
}

export default Model