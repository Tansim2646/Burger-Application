import Aux from "../../hoc/Aux/Aux";
import classes from './Layout.module.css';
const Layout = (props)=>{
    return(<Aux>
        <div>
            <h2>ToolBars,Sidebar and Backdrop</h2>
        </div>
        <main className={classes.content}>
            {props.children}
        </main>

    </Aux>);
}
export default Layout;