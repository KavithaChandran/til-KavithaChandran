import React from 'react'
//setting up the form for the home-page to add the entries to your database
function Home(props) {

    return (
        <div id='home-container'>
            {/* title set-up*/}
            <div id="pageTitle"><h2><span>Create a Journal:</span></h2></div>
            <form id='formEntry' method="POST" action={'/addEntry'}>

                <input id="formTitle" type="text" name="title" placeholder="Title" />

                <textarea id="formText" type="text" name="text" cols="30" rows="15" placeholder="Enter your Journal Entry here" />
                {/*labels for different tags are set up */}
                <label id='tagTitle'>Choose Tag for your Entry:</label>
                <div id='tag-right'>
                    <label>React<input className='tag-right' type="checkbox" name="tag" value='javascript' /></label>
                    <label>CSS<input className='tag-right' type="checkbox" name="tag" value='css' /></label>
                    <label>JavaScript<input className='tag-right' type="checkbox" name="tag" value='javascript' /></label>
                    <label>MongoDB<input className='tag-right' type="checkbox" name="tag" value='mongodb' /></label>
                    <label>HTML<input className='tag-right' type="checkbox" name="tag" value='html' /></label>
                </div>
                <div id='tag-left'>
                    <label>Lifestyle<input className='tag-left' type="checkbox" name="tag" value='lifestyle' /></label>
                    <label>Elephants<input className='tag-left' type="checkbox" name="tag" value='elephants' /></label>
                    <label>Personal<input className='tag-left' type="checkbox" name="tag" value='personal' /></label>
                    <label>Cows<input className='tag-left' type="checkbox" name="tag" value='cows' /></label>
                    <label>Games<input className='tag-left' type="checkbox" name="tag" value='games' /></label>
                </div>
                {/* click the submit button to add your journal to the database*/}
                <input id="submit" type='submit' value='Submit Entry' />
            </form>
        </div>
    )
}
export default Home