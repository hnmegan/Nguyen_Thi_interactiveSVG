(()=>{
    console.log('linked')
    let svg = document.querySelector('object')


    // function getData(e){
    //     e.preventDefault();
    //     let url=`/character/${this}`
    //     console.log(url)

    //     fetch(url)
    //     .then(res=> res.json())
    //     .then(data => console.log(data))
        
    // }

    svg.addEventListener('load',function(){
        console.log(svg)
        let svgDoc = svg.contentDocument
        let character = svgDoc.querySelectorAll('.character')
        console.log(character)

        
        })

        character.forEach(person => person.addEventListener('click', getData))

})()