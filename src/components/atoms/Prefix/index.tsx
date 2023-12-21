import classes from './Prefix.module.css';

export default function Prefix({children}: {children: React.ReactNode}) {
    return(
        <span className={classes.prefix}>{children}</span>
    )
}