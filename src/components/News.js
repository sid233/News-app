import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [country, setCountry] = useState('in');

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${country}.json`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News 24x7`;
    updateNews();
  }, [country])// eslint-disable-line react-hooks/exhaustive-deps
  

  const handleChange = (event) => {
    setCountry(event.target.value);
    // updateNews();
  };
   

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>News 24x7 - Top {capitalizeFirstLetter(props.category)} Headlines </h1>
      {loading && <Spinner />}

      <div>
        <label>
          Select Country : &nbsp; 
          <select value={country} onChange={(e) => {handleChange(e)}}>
            <option value="in">India</option>
            <option value="us">USA</option>
            <option value="au">Australia</option>
            <option value="gb">United Kingdom</option>
            <option value="fr">France</option>
            <option value="ru">Russia</option>
          </select>
        </label>
       </div>
      <div className="container">
        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}


News.defaultProps = {
  // country: 'in',
  category: 'general',
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
