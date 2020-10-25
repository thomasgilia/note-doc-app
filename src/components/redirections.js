import React from 'react'
import { Redirect } from '@reach/router' // highlight-line

const BackToIndex = () => <Redirect to={`/`} /> // highlight-line

export default BackToIndex