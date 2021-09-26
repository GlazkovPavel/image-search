import React from "react";
import {Link, useParams} from "react-router-dom";
import api from "../utils/api";

function Photo({showLoader}) {

  const params  = useParams()

  const [photo, setPhoto] = React.useState()

  React.useEffect(() => {
    showLoader(true)
    api.getPhotoId(params.id)
        .then((photo) => {
          setPhoto(photo)
        })
        .catch(err => console.log(err))
        .finally(() => {
          showLoader(false)
        })
  }, [])

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