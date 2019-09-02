const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

// If you don't know what those vars mean then see this: https://en.wikipedia.org/wiki/Umbra,_penumbra_and_antumbra#/media/File:Diagram_of_umbra,_penumbra_%26_antumbra.png

export default (...px) => {
    return [
        `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`,
        `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`,
        `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`,
    ].join(",");
};