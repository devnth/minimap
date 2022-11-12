const showcase = document.getElementById('showcase') as HTMLIFrameElement;
const key = 's91yirzafm4cn2e9xzqfnd8xa';
const minimap = document.getElementById('minimap') as HTMLButtonElement;
export {};

// augment window with the MP_SDK property
declare global {
  interface Window {
    MP_SDK: any;
  }
}

showcase.addEventListener('load', async function() {
  let sdk;
  try {
    sdk = await showcase.contentWindow.MP_SDK.connect(showcase, key, '3.6');
  }
  catch(e) {
    console.error(e);
    return;
  }

  console.log('%c  Hello Bundle SDK! ', 'background: #333333; color: #00dd00');
  console.log(sdk.Mode.Mode.FLOORPLAN);
  minimap.addEventListener('click', async function(sdk){
    console.log(sdk);
    
  })

});
