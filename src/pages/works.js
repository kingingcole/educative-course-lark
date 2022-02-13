import React, { useState, useEffect } from "react"
import Seo from "../components/seo"

const Works = () => {

  const GITHUB_USERNAME = 'kingingcole'
  const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=5&page=1&sort=updated`
  const [repos, setRepos] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
          if(data.message === "Not Found") {
              setHasError(true)
              return
          }
          setRepos(data)
      })
      .catch(() => {
          setHasError(true)
      })
  }, [])

  const renderRepos = (repos) => {
    if (!repos.length) {
        return hasError ? <p style={styles.error}>An error occured while fetching the repositories</p> : <p>Loading...</p>
    } 

    return repos.map(repo => {
        return (
            <div style={styles.wrapper}>
                <a href={repo.html_url}>{repo.name}</a>
            </div>
        )
    })
}

  return (
    <>
      <Seo
        title="Works"
        description="This page talks about the works I have done."
      />
      <p>
        Hey, I have also been pretty busy and have done some really cool
        projects in the past. Check them out!
        {
          renderRepos(repos)
        }
      </p>
    </>
  )
}

const styles = {
  wrapper: {
      border: '1px solid #00baba',
      margin: '20px 0',
      padding: '10px',
      borderRadius: '10px'
  },
  error: {
      color: 'red'
  }
}

export default Works
