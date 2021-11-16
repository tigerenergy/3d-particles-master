import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
class Model 
{
    constructor(object)
    {
        console.log(object)
        this.name = object.name
        this.file = object.file
        this.scene = object.scene

        this.loader = new GLTFLoader()
        this.dracoLoader = new DRACOLoader()
        this.dracoLoader.setDecoderPath('./draco/')
        this.loader.setDRACOLoader(this.dracoLoader)
        this.init()
    }

    init()
    {
        this.loader.load(this.file,(response)=>
        {
            console.log(response)
            this.mesh = response.scene.children[0]
            this.material = new THREE.MeshBasicMaterial(
                {
                    color: 'red',
                    wireframe: true
                })
            this.mesh.material = this.material
            this.scene.add(this.mesh)
        })
    }
}

export default Model