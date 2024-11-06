import './NotFoundPage.scss'

import { Link } from 'react-router-dom'

export function NotFoundPage() {
    return (
        <div className='not-found-page'>
            <h2 className="not-found-page__header">Sorry Eli and Joseph, wrong page! Try somewhere else... Maybe this is what you were looking for: </h2>
            <Link to='/image/d8300fda-61f8-42da-8c21-212f01a48b96' className='not-found-page__link'>Click me to see our beautiful city!</Link>
        </div>
    )
}