import React from "react";
import {Link, useParams, useRouteMatch} from "react-router-dom";


function Photo({photos}) {
  console.log(photos);
  const params  = useParams()
  const getPhotoById = (photos, id) => photos.results.find(photo => photo.id === id);
  console.log(getPhotoById);
  console.log(params.id)

 const match = useRouteMatch();

  console.log(match);

  const photo = getPhotoById(photos, params.id);
  console.log(photo)
  return (
      <div className="photo">
        <Link className="photo__goback" to="/">⟵ Go back</Link>
        {
          photo ?
              <>
                <img className="photo__image" src={photo.urls.regular} alt={photo.alt_description} />
                <p className="photo__title">{photo.user.name}</p>
                <p className="photo__subtitle">{photo.description}</p>
              </>
              : <p className="photo__note">No photo with such id</p>
        }
      </div>
  );
}

export default Photo;