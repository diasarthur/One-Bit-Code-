function group() {
  console.log('Export nomeado non-inline');
}
  
function group1() {
  console.log('Export nomeado non-inline1');
}

function group2() {
  console.log('Export nomeado non-inline2');
}

function exportDefault() {
    console.log('Exporte default non-inline')
}

export { group, group1, group2 }

export default exportDefault