import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FloorDetail.css';
import floor56F from '../assets/5-6-F.png';
import floor4F from '../assets/4-F.png';
import floor3F from '../assets/3-F.png';
import floor2F from '../assets/2-F.png';
import floor1F from '../assets/1-F.png';
import floorGF from '../assets/L-G.png';
import floorLG from '../assets/L-G.png';
import parkingImg from '../assets/emm-parking.png';
import gymImg from '../assets/emm-gym.png';
import poolImg from '../assets/emm-pool.png';
import gamingImg from '../assets/emm-gaming.png';

// Map floor IDs to their images
const floorImages = {
  'pent-house-6th-floor': floor56F,
  'apartment-5th-floor': floor56F,
  'apartment-4th-floor': floor4F,
  'apartment-3rd-floor': floor3F,
  'apartment-2nd-floor': floor2F,
  'office-1st-floor': floor1F,
  'shop-ground': floorGF,
  'shop-lower-ground': floorLG,
};

// Floor information
const floorInfo = {
  'pent-house-6th-floor': { name: 'Pent House 6th Floor', units: '2 Units' },
  'apartment-5th-floor': { name: 'Apartment 5th Floor', units: '8 Units' },
  'apartment-4th-floor': { name: 'Apartment 4th Floor', units: '14 Units' },
  'apartment-3rd-floor': { name: 'Apartment 3rd Floor', units: '14 Units' },
  'apartment-2nd-floor': { name: 'Apartment 2nd Floor', units: '14 Units' },
  'office-1st-floor': { name: 'Office 1st Floor', units: '16 Units' },
  'shop-ground': { name: 'Shop Ground', units: '18 Units' },
  'shop-lower-ground': { name: 'Shop Lower Ground', units: '18 Units' },
};

// Unit data for each floor - polygon coordinates for hover effects
// Lower Ground Floor - 18 shops
const shopLowerGroundUnits = [
  // Top Left - 3 shops (290.5 SFT each)
  { id: 'lg-shop-1', name: 'Shop 1', area: '290.5 SFT', points: '40,160 210,160 210,610 40,610' },
  { id: 'lg-shop-2', name: 'Shop 2', area: '290.5 SFT', points: '210,160 380,160 380,610 210,610' },
  { id: 'lg-shop-3', name: 'Shop 3', area: '290.5 SFT', points: '380,160 540,160 540,610 380,610' },
  // Top Right - 3 shops (290.5 SFT each)
  { id: 'lg-shop-4', name: 'Shop 4', area: '290.5 SFT', points: '990,160 1160,160 1160,610 990,610' },
  { id: 'lg-shop-5', name: 'Shop 5', area: '290.5 SFT', points: '1160,160 1325,160 1325,610 1160,610' },
  { id: 'lg-shop-6', name: 'Shop 6', area: '290.5 SFT', points: '1320,160 1500,160 1500,610 1320,610' },
  // Middle Left - 2 shops
  { id: 'lg-shop-7', name: 'Shop 7', area: '168 SFT', points: '540,160 710,160 710,420 540,420' },
  { id: 'lg-shop-8', name: 'Shop 8', area: '163 SFT', points: '540,410 710,410 710,670 540,670' },
  // Middle Right - 2 shops
  { id: 'lg-shop-9', name: 'Shop 9', area: '168 SFT', points: '820,160 990,160 990,420 820,420' },
  { id: 'lg-shop-10', name: 'Shop 10', area: '163 SFT', points: '820,410 990,410 990,670 820,670' },
  // Bottom Left - 3 shops + 1
  { id: 'lg-shop-11', name: 'Shop 11', area: '290.5 SFT', points: '40,610 210,610 210,1060 40,1060' },
  { id: 'lg-shop-12', name: 'Shop 12', area: '290.5 SFT', points: '210,610 380,610 380,1060 210,1060' },
  { id: 'lg-shop-13', name: 'Shop 13', area: '290.5 SFT', points: '380,610 540,610 540,1060 380,1060' },
  { id: 'lg-shop-14', name: 'Shop 14', area: '250 SFT', points: '540,670 710,670 710,1060 540,1060' },
  // Bottom Right - 3 shops + 1
  { id: 'lg-shop-15', name: 'Shop 15', area: '290.5 SFT', points: '1320,600 1500,600 1500,1060 1320,1060' },
  { id: 'lg-shop-16', name: 'Shop 16', area: '290.5 SFT', points: '1160,600 1325,600 1325,1060 1160,1060' },
  { id: 'lg-shop-17', name: 'Shop 17', area: '290.5 SFT', points: '990,600 1160,600 1160,1060 990,1060' },
  { id: 'lg-shop-18', name: 'Shop 18', area: '250 SFT', points: '820,670 990,670 990,1060 820,1060' },
];

// Office 1st Floor - 16 units
const office1stFloorUnits = [
  // Upper Section - Left Side
  { id: 'office-1', name: 'Office 1', area: '498 SFT', points: '60,-70 210,-70 210,540 60,540' }, // Office 15'-10½"X15'-1½"
  // Office 2 with bathroom on right side - irregular shape (L-shape)
  { id: 'office-2', name: 'Office 2', area: '555 SFT', points: '210,-70 360,-70 360,165 490,165 490,260 360,260 360,540 210,540' }, 

  { id: 'office-3', name: 'Office 3', area: '430 SFT', points: '690,315 500,315 500,260 360,260 360,315 360,540 690,540'},

  { id: 'office-4', name: 'Office 4', area: '528 SFT', points: '600,-70 440,-70 440,-110 350,-110 350,-70 350,-70 350,170 500,170 500,320 690,320 690,170 475,170 600,170' }, // Office 9'-0"X10'-1½"
  { id: 'office-5', name: 'Office 5', area: '528 SFT', points: '1050,-110 1140,-110 1140,-70 1140,170 1000,170 1000,320 800,320 800,170 1015,170 890,170 890,-70 1050,-70'  }, // Waiting 9'-0"X19'-1½"
  { id: 'office-6', name: 'Office 6', area: '430 SFT', points: '1150,200 1150,270 990,270 990,310 800,310 800,540 1150,540' }, // Office 9'-0"X19'-9"
  
  
  { id: 'office-7', name: 'Office 7', area: '555 SFT', points: '1140,-70 1290,-70 1290,540 1140,540 1140,260 1000,260 1000,165 1140,165'}, // Office + Bath on left (mirrored from Office 2, fully covers bathroom)
  { id: 'office-8', name: 'Office 8', area: '498 SFT', points: '1280,-70, 1430,-70 1430,540 1280,540' }, // Waiting 9'-0"X22'-4"
  { id: 'office-9', name: 'Office 9', area: '490 SFT', points:   '60,650 240,650 240,1140 60,1140' }, // Waiting 12'-3"X14'-3"
  { id: 'office-10', name: 'Office 10', area: '470 SFT', points: '240,650 400,650 400,1140 240,1140' }, // Office 9'-0"X10'-1½"
  { id: 'office-11', name: 'Office 11', area: '470 SFT', points: '400,650 580,650 580,1140 400,1140' }, // Waiting 9'-0"X19'-1½"
  { id: 'office-12', name: 'Office 12', area: '470 SFT', points: '580,650 750,650 750,1140 580,1140' }, // Office 9'-0"X19'-9"
  
  // Lower Section - Left Side
  { id: 'office-13', name: 'Office 13', area: '470 SFT', points: '910,650 750,650 750,1140 910,1140' }, // Waiting 10'-10½"X11'-4½"
  { id: 'office-14', name: 'Office 14', area: '470 SFT', points: '1085,650 ,910,650 910,1140 1085,1140' }, // Waiting 10'-9"X11'-4½"
  { id: 'office-15', name: 'Office 15', area: '470 SFT', points: '1260,650 1080,650 1080,1140, 1260,1140' }, // Waiting 10'-9"X11'-4½"
  
  // Lower Section - Right Side (Mirrored)
  { id: 'office-16', name: 'Office 16', area: '490 SFT', points: '1250,650 1440,650 1440,1140 1250,1140' }, // Waiting 10'-10½"X11'-4½"
 ];

// Apartment 2nd Floor - 14 units
const apartment2ndFloorUnits = [
  // Left side apartments
  { id: 'apt-2-1', name: 'Apartment 1', area: '778 SFT', bedCount: 2, points: '60,-70 300,-70 300,540 60,540' },
  { id: 'apt-2-2', name: 'Apartment 2', area: '532 SFT', bedCount: 1, points: '290,-70 440,-70 440,160 450,160 450,540 290,540' },
  { id: 'apt-2-3', name: 'Apartment 3', area: '720 SFT', bedCount: 2, points: '440,-70 600,-70 600,170 690,170 690,540 450,540 450,170 440,170 440,-70' },
  { id: 'apt-2-4', name: 'Apartment 4', area: '720 SFT', bedCount: 2, points: '1060,-70 900,-70 900,160 800,160 800,540 1050,540 1050,160 1060,160 1060,-70' },
  { id: 'apt-2-5', name: 'Apartment 5', area: '532 SFT', bedCount: 1, points: '1210,-70 1060,-70 1060,160 1050,160 1050,540 1210,540' },
  { id: 'apt-2-6', name: 'Apartment 6', area: '778 SFT', bedCount: 2, points: '1440,-70 1210,-70 1210,540 1440,540' },
  { id: 'apt-2-7', name: 'Apartment 7', area: '485 SFT', bedCount: 1, points: '60,650 240,650 240,1140 60,1140' },
  
  // Right side apartments
  { id: 'apt-2-8', name: 'Apartment 8', area: '465 SFT', bedCount: 1, points: '240,650 410,650 410,1140 240,1140' },
  { id: 'apt-2-9', name: 'Apartment 9', area: '465 SFT', bedCount: 1, points: '410,650 580,650 580,1140 410,1140' },
  { id: 'apt-2-10', name: 'Apartment 10', area: '465 SFT', bedCount: 1, points:'580,650 750,650 750,1140 580,1140' },
  { id: 'apt-2-11', name: 'Apartment 11', area: '465 SFT', bedCount: 1, points: '750,650 920,650 920,1140 750,1140' },
  { id: 'apt-2-12', name: 'Apartment 12', area: '465 SFT', bedCount: 1, points: '920,650 1090,650 1090,1140 920,1140' },
  { id: 'apt-2-13', name: 'Apartment 13', area: '465 SFT', bedCount: 1, points: '1090,650 1260,650 1260,1140 1090,1140' },
  { id: 'apt-2-14', name: 'Apartment 14', area: '485 SFT', bedCount: 1, points: '1260,650 1430,650 1430,1140 1260,1140' },
];

// Apartment 3rd Floor - 14 units (same as 2nd floor)
const apartment3rdFloorUnits = [
  // Left side apartments
  { id: 'apt-3-1', name: 'Apartment 1', area: '778 SFT', bedCount: 2, points: '70,-60 300,-60 300,540 70,540' },
  { id: 'apt-3-2', name: 'Apartment 2', area: '532 SFT', bedCount: 1, points: '290,-60 440,-60 440,170 450,170 450,540 290,540' },
  { id: 'apt-3-3', name: 'Apartment 3', area: '720 SFT', bedCount: 2, points: '440,-60 600,-60 600,170 690,170 690,540 450,540 450,170 440,170 440,-70' },
  { id: 'apt-3-4', name: 'Apartment 4', area: '720 SFT', bedCount: 2, points: '1050,-60 880,-60 880,170 800,170 800,540 1040,540 1040,170 1050,170 1050,-60' },
  { id: 'apt-3-5', name: 'Apartment 5', area: '532 SFT', bedCount: 1, points: '1200,-60 1050,-60 1050,170 1040,170 1040,540 1200,540' },
  { id: 'apt-3-6', name: 'Apartment 6', area: '778 SFT', bedCount: 2, points: '1410,-70 1200,-70 1200,540 1410,540' },
  { id: 'apt-3-7', name: 'Apartment 7', area: '485 SFT', bedCount: 1, points: '70,650 250,650 250,1120 70,1120' },
  
  // Right side apartments
  { id: 'apt-3-8', name: 'Apartment 8', area: '465 SFT', bedCount: 1, points: '250,650 410,650 410,1120 250,1120' },
  { id: 'apt-3-9', name: 'Apartment 9', area: '465 SFT', bedCount: 1, points: '410,650 580,650 580,1120 410,1120' },
  { id: 'apt-3-10', name: 'Apartment 10', area: '465 SFT', bedCount: 1, points:'580,650 750,650 750,1120 580,1120' },
  { id: 'apt-3-11', name: 'Apartment 11', area: '465 SFT', bedCount: 1, points: '750,650 910,650 910,1120 750,1120' },
  { id: 'apt-3-12', name: 'Apartment 12', area: '465 SFT', bedCount: 1, points: '910,650 1080,650 1080,1120 910,1120' },
  { id: 'apt-3-13', name: 'Apartment 13', area: '465 SFT', bedCount: 1, points: '1080,650 1250,650 1250,1120 1080,1120' },
  { id: 'apt-3-14', name: 'Apartment 14', area: '485 SFT', bedCount: 1, points: '1250,650 1420,650 1420,1120 1250,1120' },
];

// Apartment 4th Floor - 14 units (same as 2nd floor)
const apartment4thFloorUnits = [
  // Left side apartments
  { id: 'apt-4-1', name: 'Apartment 1', area: '778 SFT', bedCount: 2, points: '60,-90 290,-90 290,520 60,520' },
  { id: 'apt-4-2', name: 'Apartment 2', area: '532 SFT', bedCount: 1, points: '280,-90 440,-90 440,140 450,140 450,520 280,520' },
  { id: 'apt-4-3', name: 'Apartment 3', area: '720 SFT', bedCount: 2, points: '440,-90 600,-90 600,140 690,140 690,520 450,520 450,140 440,140 440,-90' },
  { id: 'apt-4-4', name: 'Apartment 4', area: '720 SFT', bedCount: 2, points: '1060,-90 900,-90 900,140 800,140 800,520 1050,520 1050,140 1060,140 1060,-70' },
  { id: 'apt-4-5', name: 'Apartment 5', area: '532 SFT', bedCount: 1, points: '1210,-90 1060,-90 1060,140 1050,140 1050,520 1210,520' },
  { id: 'apt-4-6', name: 'Apartment 6', area: '778 SFT', bedCount: 2, points: '1440,-90 1210,-90 1210,520 1440,520' },
  { id: 'apt-4-7', name: 'Apartment 7', area: '485 SFT', bedCount: 1, points: '60,640 240,640 240,1120 60,1120' },
  
  // Right side apartments
  { id: 'apt-4-8', name: 'Apartment 8', area: '465 SFT', bedCount: 1, points: '240,640 410,640 410,1120 240,1120' },
  { id: 'apt-4-9', name: 'Apartment 9', area: '465 SFT', bedCount: 1, points: '410,640 580,640 580,1120 410,1120' },
  { id: 'apt-4-10', name: 'Apartment 10', area: '465 SFT', bedCount: 1, points:'580,640 750,640 750,1120 580,1120' },
  { id: 'apt-4-11', name: 'Apartment 11', area: '465 SFT', bedCount: 1, points: '750,640 920,640 920,1120 750,1120' },
  { id: 'apt-4-12', name: 'Apartment 12', area: '465 SFT', bedCount: 1, points: '920,640 1090,640 1090,1120 920,1120' },
  { id: 'apt-4-13', name: 'Apartment 13', area: '465 SFT', bedCount: 1, points: '1090,640 1260,640 1260,1120 1090,1120' },
  { id: 'apt-4-14', name: 'Apartment 14', area: '485 SFT', bedCount: 1, points: '1260,640 1430,640 1430,1120 1260,1120' },
];

// Apartment 5th Floor - 8 units
const apartment5thFloorUnits = [
  // Left side apartments
//   { id: 'apt-5-1', name: 'Apartment 1', area: '1200 SFT', points: '60,-70 300,-70 300,540 60,540' },
  { id: 'apt-5-2', name: 'Apartment 1', area: '1310 SFT', bedCount: 3, points: '60,-70 440,-70 440,160 450,160 450,540 60,540' },
  { id: 'apt-5-3', name: 'Apartment 2', area: '720 SFT', bedCount: 2, points: '440,-70 610,-70 610,170 700,170 700,540 450,540 450,170 440,180 440,-70' },
  { id: 'apt-5-4', name: 'Apartment 3', area: '720 SFT', bedCount: 2, points: '1090,-70 900,-70 900,170 810,170 810,540 1060,540 1060,170 1075,170 1075,-70' },
  
  // Right side apartments
  { id: 'apt-5-5', name: 'Apartment 4', area: '1310 SFT', bedCount: 3, points: '1440,-70 1070,-70 1070,170 1060,170 1060,540 1440,540' },
//   { id: 'apt-5-6', name: 'Apartment 6', area: '1120 SFT', points: '1440,-70 1210,-70 1210,540 1440,540' },
  { id: 'apt-5-7', name: 'Apartment 5', area: '950 SFT', bedCount: 2, points: '60,660 410,660 410,1150 60,1150' },
//   { id: 'apt-5-8', name: 'Apartment 8', area: '1200 SFT', points: '240,650 410,650 410,1140 240,1140' },
  { id: 'apt-2-9', name: 'Apartment 6', area: '930 SFT', bedCount: 2, points: '410,660 750,660 750,1150 410,1150' },
//   { id: 'apt-2-10', name: 'Apartment 10', area: '1100 SFT', points:'580,650 750,650 750,1140 580,1140' },
  { id: 'apt-2-11', name: 'Apartment 7', area: '930 SFT', bedCount: 2, points: '750,660 1100,660 1100,1150 750,1150' },
//   { id: 'apt-2-12', name: 'Apartment 12', area: '1180 SFT', points: '920,650 1090,650 1090,1140 920,1140' },
  { id: 'apt-2-13', name: 'Apartment 8', area: '950 SFT', bedCount: 2, points: '1100,660 1440,660 1440,1150 1100,1150' },
//   { id: 'apt-2-14', name: 'Apartment 14', area: '1300 SFT', points: '1260,650 1430,650 1430,1140 1260,1140' },

];

// Map floor IDs to their units
const floorUnits = {
  'shop-lower-ground': shopLowerGroundUnits,
  'shop-ground': shopLowerGroundUnits, // Will update with actual coordinates later
  'office-1st-floor': office1stFloorUnits,
  'apartment-2nd-floor': apartment2ndFloorUnits,
  'apartment-3rd-floor': apartment3rdFloorUnits,
  'apartment-4th-floor': apartment4thFloorUnits,
  'apartment-5th-floor': apartment5thFloorUnits,
  'pent-house-6th-floor': [], // Will add later
};

// Amenities data
const amenities = [
  {
    id: 'parking',
    name: 'Parking',
    image: parkingImg,
  },
  {
    id: 'gym',
    name: 'Gym',
    image: gymImg,
  },
  {
    id: 'pool',
    name: 'Pool',
    image: poolImg,
  },
  {
    id: 'gaming',
    name: 'Gaming',
    image: gamingImg,
  },
];

const FloorDetail = () => {
  const { floorId } = useParams();
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredUnit, setHoveredUnit] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [unitTooltipPosition, setUnitTooltipPosition] = useState({ x: 0, y: 0 });
  const [showAmenities, setShowAmenities] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    // Open by default on larger screens, closed on mobile
    return window.innerWidth > 580;
  });
  const unitSvgRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const amenitiesSidebarRef = useRef(null);
  const sidebarRef = useRef(null);
  
  // Register form state
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    comment: ''
  });
  
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Register Request:', registerForm);
    setShowRegisterModal(false);
    // Reset form
    setRegisterForm({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      comment: ''
    });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const floorImage = floorImages[floorId];
  const floor = floorInfo[floorId];
  const units = floorUnits[floorId] || [];

  useEffect(() => {
    if (!floorImage || !floor) {
      navigate('/explore-building');
    }
  }, [floorId, floorImage, floor, navigate]);

  // Close amenities sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showAmenities &&
        amenitiesSidebarRef.current &&
        !amenitiesSidebarRef.current.contains(event.target) &&
        !event.target.closest('.amenities-btn') &&
        !event.target.closest('.action-btn')
      ) {
        setShowAmenities(false);
      }
    };

    if (showAmenities) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAmenities]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleUnitMouseMove = (e, unit) => {
    setHoveredUnit(unit.id);
  };

  const handleUnitMouseLeave = () => {
    setHoveredUnit(null);
  };

  const handleUnitClick = (e, unit) => {
    e.stopPropagation(); // Prevent event from bubbling to container
    if (unitSvgRef.current && imageWrapperRef.current) {
      const svgRect = unitSvgRef.current.getBoundingClientRect();
      const wrapperRect = imageWrapperRef.current.getBoundingClientRect();
      
      // Calculate position relative to the image wrapper (for absolute positioning)
      const clickX = e.clientX - wrapperRect.left;
      const clickY = e.clientY - wrapperRect.top;
      
      // Position tooltip above the click point
      setUnitTooltipPosition({
        x: clickX,
        y: clickY
      });
      setSelectedUnit(unit.id);
    }
  };

  const handleContainerClick = (e) => {
    // Close tooltip if clicking on the container background (not on image, SVG, or tooltip)
    const target = e.target;
    const isImage = target.classList.contains('floor-plan-image');
    const isSVG = target.closest('.unit-svg-overlay') || target.tagName === 'polygon' || target.tagName === 'svg';
    const isTooltip = target.closest('.unit-tooltip');
    const isImageWrapper = target.closest('.floor-plan-image-wrapper');
    
    // Only close if clicking directly on container background, not on any child elements
    if (!isImage && !isSVG && !isTooltip && !isImageWrapper) {
      setSelectedUnit(null);
    }
  };

  if (!floorImage || !floor) {
    return null;
  }

  const allFloors = [
    { id: 'pent-house-6th-floor', name: 'Pent House 6th Floor' },
    { id: 'apartment-5th-floor', name: 'Apartment 5th Floor' },
    { id: 'apartment-4th-floor', name: 'Apartment 4th Floor' },
    { id: 'apartment-3rd-floor', name: 'Apartment 3rd Floor' },
    { id: 'apartment-2nd-floor', name: 'Apartment 2nd Floor' },
    { id: 'office-1st-floor', name: 'Office 1st Floor' },
    { id: 'shop-ground', name: 'Shop Ground' },
    { id: 'shop-lower-ground', name: 'Shop Lower Ground' },
  ];

  const currentFloorIndex = allFloors.findIndex(f => f.id === floorId);
  const prevFloor = currentFloorIndex > 0 ? allFloors[currentFloorIndex - 1] : null;
  const nextFloor = currentFloorIndex < allFloors.length - 1 ? allFloors[currentFloorIndex + 1] : null;

  return (
    <div className={`floor-detail-page ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Left Sidebar */}
      {/* Sidebar Toggle Button - Outside (shown when sidebar is closed) */}
      {!isSidebarOpen && (
        <button 
          className="sidebar-toggle-btn"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Toggle sidebar"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      <div 
        ref={sidebarRef}
        className={`floor-sidebar ${isSidebarOpen ? 'open' : ''}`}
      >
        <div className="sidebar-brand">
          <div className="brand-main">OASIS</div>
          <div className="brand-sub">PALM TOWER</div>
        </div>
        
        <div className="floor-selector-container">
          <div className="floor-selector-header">
            <button 
              className="floor-nav-btn" 
              onClick={() => prevFloor && navigate(`/floor/${prevFloor.id}`)}
              disabled={!prevFloor}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="current-floor-display">{floor?.name}</div>
            <button 
              className="floor-nav-btn"
              onClick={() => nextFloor && navigate(`/floor/${nextFloor.id}`)}
              disabled={!nextFloor}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="floor-list">
            <div className="floor-list-title">Floor</div>
            {allFloors.map((floorItem) => (
              <div
                key={floorItem.id}
                className={`floor-list-item ${floorItem.id === floorId ? 'active' : ''}`}
                onClick={() => navigate(`/floor/${floorItem.id}`)}
              >
                {floorItem.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Header with Back Button */}
      <div className="floor-detail-header">
        <div></div>
        <div className="header-right-controls">
          <div className="zoom-controls-mobile">
            <button className="zoom-btn" onClick={handleZoomIn} title="Zoom In">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="zoom-btn" onClick={handleZoomOut} title="Zoom Out">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="zoom-btn" onClick={handleResetZoom} title="Reset Zoom">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2V18M2 10H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <button className="back-to-building-btn" onClick={() => navigate('/explore-building')}>
            Back to Building
          </button>
        </div>
      </div>

      {/* Floor Plan Container */}
      <div 
        className="floor-plan-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleContainerClick}
      >
        <div 
          ref={imageWrapperRef}
          className="floor-plan-image-wrapper"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
            position: 'relative',
          }}
        >
          <img 
            src={floorImage} 
            alt={floor.name}
            className="floor-plan-image"
            draggable={false}
          />
          {/* Unit Overlay SVG */}
          {units.length > 0 && (
            <svg
              ref={unitSvgRef}
              className="unit-svg-overlay"
              viewBox="0 0 1500 1080"
              preserveAspectRatio="xMidYMid meet"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              {units.map((unit) => (
                <polygon
                  key={unit.id}
                  className={`unit-shape ${selectedUnit === unit.id ? 'selected' : ''}`}
                  points={unit.points}
                  data-unit={unit.name}
                  onMouseMove={(e) => handleUnitMouseMove(e, unit)}
                  onMouseLeave={handleUnitMouseLeave}
                  onClick={(e) => handleUnitClick(e, unit)}
                />
              ))}
            </svg>
          )}
          {selectedUnit && (() => {
            const unit = units.find(u => u.id === selectedUnit);
            const isOfficeFloor = floorId?.includes('office');
            return unit ? (
              <div
                className="unit-tooltip"
                style={{
                  left: `${unitTooltipPosition.x}px`,
                  top: `${unitTooltipPosition.y}px`,
                }}
              >
                <div className="unit-tooltip-header">
                  <span className="unit-tooltip-title">{unit.name}</span>
                </div>
                <div className="unit-tooltip-content">
                  <div className="unit-tooltip-row">
                    <span className="unit-tooltip-label">Floor:</span>
                    <span className="unit-tooltip-value">
                      {floorId?.includes('apartment-2nd-floor') ? 'Second Floor' :
                       floorId?.includes('apartment-3rd-floor') ? 'Third Floor' :
                       floorId?.includes('apartment-4th-floor') ? 'Fourth Floor' :
                       floorId?.includes('apartment-5th-floor') ? 'Fifth Floor' :
                       floorId?.includes('pent-house-6th-floor') ? 'Sixth Floor' :
                       floorId?.includes('office-1st-floor') ? 'First Floor' :
                       floorId?.includes('shop-ground') ? 'Ground Floor' :
                       floorId?.includes('shop-lower-ground') ? 'Lower Ground Floor' :
                       floor?.name}
                    </span>
                  </div>
                  <div className="unit-tooltip-row">
                    <span className="unit-tooltip-label">Type:</span>
                    <span className="unit-tooltip-value">
                      {floorId?.includes('office') ? 'Office' : 
                       floorId?.includes('apartment') && unit.bedCount ? `${unit.bedCount} Bed` :
                       floorId?.includes('pent-house') ? 'Pent House' : 
                       floorId?.includes('shop') ? 'Shop' : 'Apartment'}
                    </span>
                  </div>
                  <div className="unit-tooltip-row">
                    <span className="unit-tooltip-label">Area:</span>
                    <span className="unit-tooltip-value">{unit.area}</span>
                  </div>
                </div>
                <div className="unit-tooltip-buttons">
                  <button 
                    className="unit-tooltip-btn explore-plan-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/explore-plan/${floorId}/${unit.id}`);
                    }}
                  >
                    Explore Plan
                  </button>
                </div>
              </div>
            ) : null;
          })()}
        </div>
      </div>


      {/* Zoom Controls */}
      <div className="zoom-controls">
        <button className="zoom-btn" onClick={handleZoomIn} title="Zoom In">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="zoom-btn" onClick={handleZoomOut} title="Zoom Out">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="zoom-btn" onClick={handleResetZoom} title="Reset Zoom">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2V18M2 10H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="floor-action-buttons">
        <button className="action-btn amenities-btn" onClick={() => setShowAmenities(!showAmenities)} title="Amenities">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L12.09 8.26L19 9L14 13.74L15.18 20L10 16.77L4.82 20L6 13.74L1 9L7.91 8.26L10 2Z" fill="currentColor"/>
          </svg>
        </button>
        <button 
          className="action-btn" 
          onClick={() => window.open('https://maps.app.goo.gl/WMjzyJq1Fpoy4zwL7?g_st=ic', '_blank')}
          title="Get Directions"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2C7.24 2 5 4.24 5 7C5 11.25 10 18 10 18C10 18 15 11.25 15 7C15 4.24 12.76 2 10 2ZM10 9.5C8.62 9.5 7.5 8.38 7.5 7C7.5 5.62 8.62 4.5 10 4.5C11.38 4.5 12.5 5.62 12.5 7C12.5 8.38 11.38 9.5 10 9.5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
        <button 
          className="action-btn"
          onClick={() => setShowRegisterModal(true)}
          title="Register Request"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4H16C17.1 4 18 4.9 18 6V14C18 15.1 17.1 16 16 16H4C2.9 16 2 15.1 2 14V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M18 6L10 11L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Amenities Sidebar */}
      {showAmenities && (
        <div className="amenities-sidebar" ref={amenitiesSidebarRef}>
          <div className="amenities-sidebar-content">
            {amenities.map((amenity) => (
              <div key={amenity.id} className="amenity-sidebar-card">
                {amenity.image ? (
                  <img src={amenity.image} alt={amenity.name} className="amenity-sidebar-image" />
                ) : (
                  <div className="amenity-sidebar-placeholder">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
                      <path d="M30 5L35 20L50 25L35 30L30 45L25 30L10 25L25 20L30 5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                )}
                <div className="amenity-sidebar-label">{amenity.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Left - Developer Info */}
      <div className="floor-developer-info">
        <div className="floor-developer-text">
          <div className="floor-developer-prefix">A Project by</div>
          <div className="floor-developer-name-wrapper">
            <span className="floor-developer-diamond">◆</span>
            <span className="floor-developer-name">TAIBA DEVELOPERS</span>
          </div>
        </div>
      </div>

      {/* Register Request Modal */}
      {showRegisterModal && (
        <div className="register-modal-overlay" onClick={() => setShowRegisterModal(false)}>
          <div className="register-modal" onClick={(e) => e.stopPropagation()}>
            <div className="register-modal-header">
              <h2 className="register-modal-title">Register Request</h2>
              <button 
                className="register-modal-close" 
                onClick={() => setShowRegisterModal(false)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <form className="register-form" onSubmit={handleRegisterSubmit}>
              <div className="register-form-group">
                <label htmlFor="firstName-floor">First Name</label>
                <input
                  type="text"
                  id="firstName-floor"
                  name="firstName"
                  value={registerForm.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="lastName-floor">Last Name</label>
                <input
                  type="text"
                  id="lastName-floor"
                  name="lastName"
                  value={registerForm.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="phoneNumber-floor">Phone Number</label>
                <div className="phone-input-wrapper">
                  <div className="phone-country-code">
                    <span className="phone-flag">🇵🇰</span>
                    <span className="phone-code">+92</span>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber-floor"
                    name="phoneNumber"
                    value={registerForm.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="300 1234567"
                    required
                  />
                </div>
              </div>
              <div className="register-form-group">
                <label htmlFor="email-floor">Email</label>
                <input
                  type="email"
                  id="email-floor"
                  name="email"
                  value={registerForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="comment-floor">Comment</label>
                <textarea
                  id="comment-floor"
                  name="comment"
                  value={registerForm.comment}
                  onChange={handleInputChange}
                  rows="3"
                />
              </div>
              <button type="submit" className="register-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorDetail;

