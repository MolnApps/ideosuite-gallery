class Hydrator
{
    hydrateAll(items) {
        return items.map(this.hydrate.bind(this))
    }

    hydrate(item) {
        return item
    }
}

export default Hydrator