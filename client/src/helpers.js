const selectedTags = (form) => {
    const selectedTags = []
    const tags = ['sea', 'cliff', 'nature', 'coast', 'Gdynia', 'krokusy', 'mountains']
    // Iterujemy przez tablicę tagów i sprawdzamy, czy dany tag jest zaznaczony
    // Jeśli tak, dodajemy go do selectedTags
    tags.forEach((tag) => {
        if (form[tag] === true) {
            selectedTags.push(tag)
        }
    })
    return selectedTags
}
export { selectedTags }