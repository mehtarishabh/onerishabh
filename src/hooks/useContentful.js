import { useEffect, useState } from "react";
import * as contentful from "contentful";

const useContentful = (entry_id) => {
  const [entry, setEntry] = useState("");
  
  useEffect(() => {
    const client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL.space,
      // This is the access token for this space. Normally you get the token in the Contentful web app
      accessToken: process.env.REACT_APP_CONTENTFUL.accessToken,
    })
    client
      .getEntry(entry_id)
      .then(entry => {
        setEntry(entry.fields);
      })
      .catch(err => console.log(err));
  },[entry_id])

  return entry;
}

export default useContentful;
