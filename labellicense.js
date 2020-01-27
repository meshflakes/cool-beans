        // Creates a client
        const client = new vision.ImageAnnotatorClient();
        const request = {
            image: {content: gcsUri},
          };          