const baseData = require('./test-metadata.json')

function genMetadata(name, imgURL, url) {
  return {
    name: name,
    image: imgURL,
    external_url: url,
    attributes: [
      {
        "trait_type": "Rarity",
        "value": 0,
        "max_value": 10000
      },
      {
        trait_type: 'Background',
        value: background,
      },
      {
        trait_type: 'Body',
        value: body,
      },
      {
        trait_type: 'Clothes',
        value: clothes,
      },
      {
        trait_type: 'Eyes',
        value: eyes,
      },
      {
        trait_type: 'Head',
        value: head,
      },
      {
        trait_type: 'Mouth',
        value: mouth,
      },
      {
        trait_type: 'Accessory',
        value: accessory,
      },
    ],
  }
}

console.log(baseData)
