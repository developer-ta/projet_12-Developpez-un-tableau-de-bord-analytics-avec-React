export async function fetchData(urlString) {
  try {
    const res = await fetch(urlString);

    if (res.ok) return res.json();

    throw new Error('Not funded any data');
  } catch (error) {
    console.log('error request not succeed!  ' + error);
  }
}
