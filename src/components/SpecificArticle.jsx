import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SpecificArticle = () => {
  const [article, setArticle] = useState([]);
  const { id } = useParams()

  // useEffect(() => {
  // }, [])

  return (
  <div>
    <p>Article id is {id}</p>
  </div>
  )
};

export default SpecificArticle;
