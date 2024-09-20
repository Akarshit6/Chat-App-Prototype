import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const CallManager = () => {
    const { name } = useParams();
    const elementRef = useRef(null);

    useEffect(() => {
        const initializeMeeting = async () => {
            const appID = 1768943786; 
            const serverSecret = "c36547ca0eabe896f1b04fd42336db28"; 

            try {
                const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                    appID,
                    serverSecret,
                    name,
                    Date.now().toString(),
                    "Unknown"
                );

                if (!kitToken) {
                    throw new Error('Failed to generate kit token');
                }

                console.log('KitToken:', kitToken);

                const zp = ZegoUIKitPrebuilt.create(kitToken);

                if (zp && typeof zp.joinRoom === 'function') {
                    zp.joinRoom({
                        container: elementRef.current,
                        scenario: {
                            mode: ZegoUIKitPrebuilt.OneONoneCall,
                        },
                        showScreenSharingButton: true,
                    });
                } else {
                    throw new Error('ZegoUIKitPrebuilt.create did not return an instance with joinRoom method.');
                }
            } catch (error) {
                console.error('Error initializing Zego UI Kit:', error);
            }
        };

        initializeMeeting();
    }, [name]);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100vh', 
      
          }}>
            <div ref={elementRef} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100vh', 
                }} />
        </div>
    );
};

export default CallManager;
