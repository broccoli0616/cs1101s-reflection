function flatten_list(xs){
    if (is_null(xs)){
        return 0;
    } else if (is_list(xs)){
        flatten_list(head(xs));
        flatten_list(tail(xs));
    } else { 
         return xs;
}
}
flatten_list(list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9))); 



/*function tree_sum(tree) {
    return is_null(tree)
           ? 0
           : ( is_list(head(tree))
               ? tree_sum(head(tree))
               : head(tree)) +
                 tree_sum(tail(tree));
}

tree_sum(list(1, list(2, list(3, 4), 5), list(6, 7))); */