/*function flatten_list(xs){
    if (is_null(xs)){
        return 0;
    } else if (is_list(xs)){
        flatten_list(head(xs));
        flatten_list(tail(xs));
    } else { 
         return xs;
}
}
flatten_list(list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9))); */ 

function flatten_list(xs){
    return accumulate(append, null, xs);
}

flatten_list(list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9))); 



/*function tree_sum(tree) {
    return is_null(tree)
           ? 0
           : (is_list(head(tree))
               ? tree_sum(head(tree))
               : head(tree)) +
                 tree_sum(tail(tree));
}

tree_sum(list(1, list(2, list(3, 4), 5), list(6, 7))); */


// must take note the data type of accumulate fn! + and use substition to 
// figure out the op ( starting from the end )

/* wrap the whole y as "wish", assume the function works and substibute with 
// assume it is flat list first, then add the is_list(head(xs)) */

//accumulate_tree comes when accumulate(op, int, xs) is not enough for operation


/*function flatten_list(xs){
    if (is_null(xs)){
        return 0;
    } else if (is_list(xs)){
        flatten_list(head(xs));
        flatten_list(tail(xs));
    } else { 
         return xs;
}
}
flatten_list(list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9))); */ 

function flatten_list(xs){
    return accumulate(append, null, xs);
}

flatten_list(list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9))); 



/*function tree_sum(tree) {
    return is_null(tree)
           ? 0
           : (is_list(head(tree))
               ? tree_sum(head(tree))
               : head(tree)) +
                 tree_sum(tail(tree));
}

tree_sum(list(1, list(2, list(3, 4), 5), list(6, 7))); */


// must take note the data type of accumulate fn! + and use substition to 
// figure out the op ( starting from the end )

/* wrap the whole y as "wish", assume the function works and substibute with 
// assume it is flat list first, then add the is_list(head(xs)) */

//accumulate_tree comes when accumulate(op, int, xs) is not enough for operation









