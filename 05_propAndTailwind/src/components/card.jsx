import React from "react";

function Card(){
    return (
    <figure className="bg-slate-900 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512"/>
    <div className="pt-6 space-y-4">
    <blockquote>
        <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
        </p>
    </blockquote>
    <figcaption className="font-medium">
        <div className="text">
        Sarah Dayan
        </div>
        <div>
        Staff Engineer, Algolia
        </div>
    </figcaption>
    </div>
</figure>)
}

export default Card;