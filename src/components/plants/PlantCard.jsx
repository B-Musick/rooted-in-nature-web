function PlantCard({ plant }) {
    let { genus, species, commonName, imageUrl } = plant;

    return (
        <div className="w-48 m-3 rounded-lg bg-stone-100">
            <div>
                <img className="h-32 w-full rounded-t-lg" src={imageUrl} alt={commonName} />
            </div>
            <div>
                <div className="text-gray-500">
                    <p className="font-semibold">{commonName}</p>
                    <p className="text-sm italic">{genus} {species}</p>
                </div>
            </div>
        </div>
    )
}

export default PlantCard;