import classes from './Layout.module.css';

type LayoutPropType = {
  children: JSX.Element
}

function Layout(props: LayoutPropType){
  return <div>
    <main className={classes.main}>
      {props.children}
    </main>
  </div>
}
export default Layout;