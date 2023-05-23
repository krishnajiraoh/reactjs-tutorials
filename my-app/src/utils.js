export function getImageUrl(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }
  
/*export function getImageUrl(imageId, size = 's') {
    let s = getSize(size)
    return (
      'https://i.imgur.com/' +
      imageId +
      s +
      '.jpg'
    );
  }

  function getSize(size) {
    if(size>90){
        return 'b'
    }
    else{
        return 's'
    }
  }*/