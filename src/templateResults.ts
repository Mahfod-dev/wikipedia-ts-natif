export const createResultsElement = (result:{title:string,snippet:string},results:HTMLElement) => {
    const div = document.createElement('div')
      div.innerHTML = `
            <h3>${result.title}</h3>
            <p>${result.snippet}</p>
        `;
    results.append(div)
}