"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const ThreejsText = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  // カメラ位置を更新する関数
  const updateCameraPosition = () => {
    if (cameraRef.current && rendererRef.current) {
      const newPosition = isSmallScreen
        ? { x: 0, y: -100, z: 720 }
        : { x: -120, y: -100, z: 720 };
      
      cameraRef.current.position.set(newPosition.x, newPosition.y, newPosition.z);
      cameraRef.current.updateProjectionMatrix();
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      // シーンを再レンダリング
      if (sceneRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    }
  };

  // 画面サイズが変更されたときのカメラ位置更新
  useEffect(() => {
    updateCameraPosition();
  }, [isSmallScreen]);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // コンテナのサイズを取得
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // レンダラーの設定
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    // シーン
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // カメラ
    const camera = new THREE.PerspectiveCamera(
      55,
      containerWidth / containerHeight,
      1,
      10000
    );
    cameraRef.current = camera;
    
    // 初期カメラ位置の設定
    const initialPosition = isSmallScreen
      ? { x: 0, y: -100, z: 720 }
      : { x: -120, y: -100, z: 720 };
    camera.position.set(initialPosition.x, initialPosition.y, initialPosition.z);

    // レンダリング関数
    const render = () => {
      renderer.render(scene, camera);
    };

    // フォントローダー
    const loader = new FontLoader();
    loader.load("/fonts/Shippori Mincho B1_Bold.json", function (font) {
      const color = 0x006699;

      const matDark = new THREE.LineBasicMaterial({
        color: color,
        side: THREE.DoubleSide,
      });

      const matLite = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
      });

      const message = "明日を創造する\n第一歩をともに";
      const shapes = font.generateShapes(message, 100);
      const geometry = new THREE.ShapeGeometry(shapes);

      geometry.computeBoundingBox();
      if (!geometry.boundingBox) return;

      const xMid =
        -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
      geometry.translate(xMid, 0, 0);

      // テキストメッシュの作成
      const text = new THREE.Mesh(geometry, matLite);
      text.position.z = -150;
      scene.add(text);

      // ラインの作成
      const holeShapes: THREE.Shape[] = [];

      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        if (shape.holes && shape.holes.length > 0) {
          for (let j = 0; j < shape.holes.length; j++) {
            const hole = new THREE.Shape(shape.holes[j].getPoints());
            holeShapes.push(hole);
          }
        }
      }

      shapes.push(...holeShapes);

      const lineText = new THREE.Object3D();
      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        const points = shape.getPoints();
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        geometry.translate(xMid, 0, 0);

        const lineMesh = new THREE.Line(geometry, matDark);
        lineText.add(lineMesh);
      }

      scene.add(lineText);
      render();
    });

    // ウィンドウリサイズ対応
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      render();
    };

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.target.set(0, 0, 0);
    controls.update();

    controls.addEventListener("change", render);

    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", handleResize);
      controls.removeEventListener("change", render);
      controls.dispose();
    };
  }, []); // 初期化時のみ実行

  return (
    <Box
      ref={containerRef}
      width={{ xs: "100vw", md: "45vw" }}
      height={{ xs: "35vh", md: "65vh" }}
      position={"relative"}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
};

export default ThreejsText;