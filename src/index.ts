import * as THREE from "three";

const showcase = document.getElementById("showcase") as HTMLIFrameElement;

const img = document.getElementById("img") as HTMLImageElement;

const key = "s62iieq0tk910g4kipbq5ienc";

export {};

declare global {
  interface Window {
    MP_SDK: any;
  }
}

showcase.addEventListener("load", async function () {
  try {
    document.getElementById("loader").style.display = "block";
    let sdk = await showcase.contentWindow.MP_SDK.connect(showcase, key, "3.6");

    console.log(
      "%c  Hello Bundle SDK! ",
      "background: #333333; color: #00dd00"
    );
    console.log(sdk);
    onShowcaseConnect(sdk);
    document.getElementById("loader").style.display = "none";
  } catch (e) {
    console.error(e);
    return;
  }
});

async function onShowcaseConnect(sdk: {
  Renderer: any;
  Camera: {
    getPose(): any;
    // getPose(arg0: (mode: any) => void);
    takeScreenShot: (
      arg0: { width: number; height: number },
      arg1: { mattertags: boolean; sweeps: boolean }
    ) => any;
    pose: {
      subscribe: (
        arg0: (pose: {
          position: any;
          rotation: any;
          sweep: any;
          mode: any;
        }) => void
      ) => void;
    };
    add: (arg0: THREE.PerspectiveCamera) => void;
  };
  Scene: {
    createObjects(arg0: number): [any] | PromiseLike<[any]>;
    add: (arg0: THREE.PerspectiveCamera) => void;
  };
  Mode: {
    TransitionType: any;
    Transition: any;
    current: any;
    Mode: {
      INSIDE: any;
      FLOORPLAN: any;
    };
    transition: {
      INSTANT: any;
    };
    moveTo: (
      arg0: any,
      arg1: {
        position: { x: number; y: number; z: number };
        rotation: { x: number; y: number };
        transition: any;
        zoom: number;
      }
    ) => void;
  };
}) {
  const Minimap = document.querySelectorAll("#miniMap");
  Minimap.forEach((el) => {
    el.addEventListener("click", async () => {
      try {
        sdk.Camera.pose.subscribe(function (pose: {
          position: any;
          rotation: any;
          sweep: any;
          mode: any;
        }) {});
        let floor = async (): Promise<any> => {
          try {
            const mode = sdk.Mode.Mode.FLOORPLAN;
            const position = { x: 0, y: 1000, z: 0 };
            const rotation = { x: -90, y: 0 };
            const transition = sdk.Mode.TransitionType.INSTANT;
            const zoom = 0;
            await sdk.Mode.moveTo(mode, {
              position: position,
              rotation: rotation,
              transition: transition,
              zoom,
            });
            if (mode == sdk.Mode.Mode.FLOORPLAN) {
              console.log("move");
            }
            const arr = await sdk.Renderer.takeScreenShot(
              { width: 850, height: 553 },
              { mattertags: true, sweeps: true }
            );
            console.log(arr, "dgd");
            try {
              const mode2 = sdk.Mode.Mode.INSIDE;
              console.log("Model sid2222:" + mode);

              const position2 = {
                x: 0.026094570755958557,
                y: 1.339855670928955,
                z: -0.04097997769713402,
              };
              const rotation2 = { x: -20, y: 0 };
              const transition2 = sdk.Mode.TransitionType.INSTANT;
              const zoom2 = 0;

              const move2 = await sdk.Mode.moveTo(mode2, {
                position: position2,
                rotation: rotation2,
                transition: transition2,
                zoom: zoom2,
              });

              console.log(move2, "ss");
              return arr;
            } catch (err) {}
          } catch (err) {}
        };
        floor().then((res) => (img.src = res));
        const mode = sdk.Mode.Mode.FLOORPLAN;
        const position = { x: 0, y: 1000, z: 0 };
        const rotation = { x: 90, y: 90 };
        const transition3 = sdk.Mode.Transition.INSTANT;
        const zoom = 0;
        const arr = await sdk.Renderer.takeScreenShot(
          { width: 850, height: 553 },
          { mattertags: true, sweeps: true }
        );

        console.log(arr, "fff");
        const move = await sdk.Mode.moveTo(mode, {
          position: position,
          rotation: rotation,
          transition: transition3,
          zoom,
        });
        console.log("move", move);
      } catch (e) {
        console.error(e);
      }
    });
  });

  const cam = document.querySelectorAll("#cam");
  cam.forEach((el) => {
    el.addEventListener("click", async () => {
      try {
        // Create a three.js camera object that will be the acting as the source for the camera component.
        const myCamera = new THREE.PerspectiveCamera(45, 1.333, 1, 1000);
        const topCamera = new THREE.PerspectiveCamera(45, 1.333, 1, 1000);
        // Create a scene object and node with a camera component.
        // Set it up to request control after
        // the node is started by setting enabled to true.
        const [sceneObject] = await sdk.Scene.createObjects(2);
        const node = sceneObject.addNode();
        const node2 = sceneObject.addNode();
        const cameraComponent = node.addComponent("mp.camera", {
          enabled: true,
          camera: myCamera,
        });
        // Define a spy that intercepts ONACCESSGRANTED events
        class AccessGrantedSpy {
          public eventType: "ONACCESSGRANTED";
          public onEvent(payload: unknown) {
            // myCamera is now enabled, changes to your camera will
            // be reflected on the showcase camera.
          }
        }
        console.log("cameraComponent", cameraComponent);

        console.log("AccessGrantedSpy", AccessGrantedSpy);

        //const topCamera = new THREE.PerspectiveCamera( 90, 1.333, 0.01, 1000 );
        const topCameraComponent = node2.addComponent("mp.camera", {
          enabled: true,
          camera: topCamera,
        });
        console.log("topCameraComponent", topCameraComponent);
        // myCamera.position.set(0,100,0);
        // myCamera.lookAt(0, -50, 0);

        topCamera.position.set(0, 100, 0);
        topCamera.lookAt(0, 0, 0);
        myCamera.add(topCamera);

        // node.add(topCamera);

        // spy on the camera before it starts.
        //cameraComponent.spyOnEvent( new AccessGrantedSpy());
        // start the camera node
        node.start();
        node2.start();
        console.log("new camera", sdk);
      } catch (e) {
        console.error(e);
      }
    });
  });
}

