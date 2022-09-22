import { NearestFilter, TextureLoader, RepeatWrapping } from 'three'

const dirtTexture = new TextureLoader().load('./images/dirt.jpg')
const logTexture = new TextureLoader().load('./images/log.jpg')
const grassTexture = new TextureLoader().load('./images/grass.jpg')
const glassTexture = new TextureLoader().load('./images/glass.png')
const woodTexture = new TextureLoader().load('./images/wood.png')
const groundTexture = new TextureLoader().load('./images/grass.jpg')

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

export {
	dirtTexture,
	logTexture,
	grassTexture,
	glassTexture,
	woodTexture,
	groundTexture
}