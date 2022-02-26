
class App extends React.Component{
    render(){
        return(
            <div>
                <h2>Like/Dislike Counter</h2>
                <Like/>

            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('id'))