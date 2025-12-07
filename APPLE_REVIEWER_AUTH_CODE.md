# Apple Reviewer Authentication Code

## Overview
This document contains code snippets for handling Apple Reviewer test accounts in your authentication flow. Apple reviewers need to be able to log in without email access, so we provide a test account that accepts a fixed OTP code.

## Test Account Details
- **Email**: `apple_test@longevro.com`
- **OTP Code**: `123456` (always accepted, no email sent)

---

## Option 1: Next.js API Route (if backend is in Next.js)

### File: `src/app/api/auth/send-otp/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';

const APPLE_TEST_EMAIL = 'apple_test@longevro.com';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Apple reviewer test account - don't send email, just return success
    if (email.toLowerCase() === APPLE_TEST_EMAIL) {
      // Log for debugging (remove in production or use proper logging)
      console.log('[APPLE REVIEWER] OTP requested for test account');
      
      return NextResponse.json({
        success: true,
        message: 'OTP code sent (test account)',
        // Optionally return a test OTP for development
        testOtp: '123456'
      });
    }

    // Normal flow: Generate and send OTP via email service
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    // TODO: Send OTP via your email service (SendGrid, AWS SES, etc.)
    // await sendEmail(email, otpCode);
    
    // TODO: Store OTP in database/cache with expiration (e.g., Redis)
    // await storeOtp(email, otpCode, expiresIn: 600); // 10 minutes

    return NextResponse.json({
      success: true,
      message: 'OTP code sent to your email'
    });

  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}
```

### File: `src/app/api/auth/verify-otp/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';

const APPLE_TEST_EMAIL = 'apple_test@longevro.com';
const APPLE_TEST_OTP = '123456';

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: 'Email and OTP are required' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase();

    // Apple reviewer test account - always accept fixed OTP
    if (normalizedEmail === APPLE_TEST_EMAIL) {
      if (otp === APPLE_TEST_OTP) {
        console.log('[APPLE REVIEWER] Test account login successful');
        
        // TODO: Generate and return auth token/session
        // const token = await generateAuthToken(email);
        
        return NextResponse.json({
          success: true,
          message: 'Authentication successful',
          // token: token,
          // user: { email, isTestAccount: true }
        });
      } else {
        return NextResponse.json(
          { error: 'Invalid OTP code' },
          { status: 401 }
        );
      }
    }

    // Normal flow: Verify OTP from database/cache
    // TODO: Retrieve stored OTP from database/cache
    // const storedOtp = await getStoredOtp(email);
    
    // if (!storedOtp || storedOtp !== otp) {
    //   return NextResponse.json(
    //     { error: 'Invalid or expired OTP code' },
    //     { status: 401 }
    //   );
    // }
    
    // TODO: Delete used OTP from database/cache
    // await deleteOtp(email);
    
    // TODO: Generate and return auth token/session
    // const token = await generateAuthToken(email);

    // Placeholder for normal flow
    return NextResponse.json({
      success: true,
      message: 'Authentication successful',
      // token: token
    });

  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json(
      { error: 'Failed to verify OTP' },
      { status: 500 }
    );
  }
}
```

---

## Option 2: Generic Node.js/Express Backend

### File: `routes/auth.js` or `controllers/authController.js`

```javascript
const APPLE_TEST_EMAIL = 'apple_test@longevro.com';
const APPLE_TEST_OTP = '123456';

// Send OTP endpoint
async function sendOtp(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const normalizedEmail = email.toLowerCase();

    // Apple reviewer test account
    if (normalizedEmail === APPLE_TEST_EMAIL) {
      console.log('[APPLE REVIEWER] OTP requested for test account');
      return res.json({
        success: true,
        message: 'OTP code sent (test account)',
        testOtp: '123456' // Only in development
      });
    }

    // Normal flow: Generate and send OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    // TODO: Send email via your email service
    // await emailService.sendOtp(email, otpCode);
    
    // TODO: Store OTP in database/cache
    // await otpService.store(email, otpCode, 600); // 10 min expiry

    res.json({ success: true, message: 'OTP code sent to your email' });

  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
}

// Verify OTP endpoint
async function verifyOtp(req, res) {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ error: 'Email and OTP are required' });
    }

    const normalizedEmail = email.toLowerCase();

    // Apple reviewer test account
    if (normalizedEmail === APPLE_TEST_EMAIL) {
      if (otp === APPLE_TEST_OTP) {
        console.log('[APPLE REVIEWER] Test account login successful');
        
        // TODO: Generate auth token
        // const token = generateToken(email);
        
        return res.json({
          success: true,
          message: 'Authentication successful',
          // token: token
        });
      } else {
        return res.status(401).json({ error: 'Invalid OTP code' });
      }
    }

    // Normal flow: Verify OTP from database/cache
    // const storedOtp = await otpService.get(email);
    // if (!storedOtp || storedOtp.code !== otp) {
    //   return res.status(401).json({ error: 'Invalid or expired OTP' });
    // }
    
    // await otpService.delete(email);
    // const token = generateToken(email);

    res.json({ success: true, message: 'Authentication successful' });

  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: 'Failed to verify OTP' });
  }
}

module.exports = { sendOtp, verifyOtp };
```

---

## Option 3: Firebase Functions

### File: `functions/src/auth.ts`

```typescript
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const APPLE_TEST_EMAIL = 'apple_test@longevro.com';
const APPLE_TEST_OTP = '123456';

export const sendOtp = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const normalizedEmail = email.toLowerCase();

  // Apple reviewer test account
  if (normalizedEmail === APPLE_TEST_EMAIL) {
    console.log('[APPLE REVIEWER] OTP requested for test account');
    return res.json({
      success: true,
      message: 'OTP code sent (test account)',
      testOtp: '123456'
    });
  }

  // Normal flow
  const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Store in Firestore with expiration
  await admin.firestore().collection('otps').doc(email).set({
    code: otpCode,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    expiresAt: admin.firestore.Timestamp.fromDate(
      new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
    )
  });

  // TODO: Send email via SendGrid, etc.
  // await sendEmail(email, otpCode);

  res.json({ success: true, message: 'OTP code sent to your email' });
});

export const verifyOtp = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }

  const normalizedEmail = email.toLowerCase();

  // Apple reviewer test account
  if (normalizedEmail === APPLE_TEST_EMAIL) {
    if (otp === APPLE_TEST_OTP) {
      console.log('[APPLE REVIEWER] Test account login successful');
      
      // Generate custom token
      const customToken = await admin.auth().createCustomToken(email);
      
      return res.json({
        success: true,
        token: customToken
      });
    } else {
      return res.status(401).json({ error: 'Invalid OTP code' });
    }
  }

  // Normal flow: Verify from Firestore
  const otpDoc = await admin.firestore().collection('otps').doc(email).get();
  
  if (!otpDoc.exists) {
    return res.status(401).json({ error: 'OTP not found or expired' });
  }

  const otpData = otpDoc.data()!;
  const expiresAt = otpData.expiresAt.toDate();

  if (new Date() > expiresAt) {
    await admin.firestore().collection('otps').doc(email).delete();
    return res.status(401).json({ error: 'OTP expired' });
  }

  if (otpData.code !== otp) {
    return res.status(401).json({ error: 'Invalid OTP code' });
  }

  // Delete used OTP
  await admin.firestore().collection('otps').doc(email).delete();

  // Generate custom token
  const customToken = await admin.auth().createCustomToken(email);

  res.json({ success: true, token: customToken });
});
```

---

## Option 4: AWS Lambda (Serverless)

### File: `lambda/auth-handler.js`

```javascript
const APPLE_TEST_EMAIL = 'apple_test@longevro.com';
const APPLE_TEST_OTP = '123456';

exports.handler = async (event) => {
  const { path, httpMethod, body } = event;
  const parsedBody = JSON.parse(body || '{}');

  // Send OTP endpoint
  if (path === '/auth/send-otp' && httpMethod === 'POST') {
    const { email } = parsedBody;

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' })
      };
    }

    const normalizedEmail = email.toLowerCase();

    // Apple reviewer test account
    if (normalizedEmail === APPLE_TEST_EMAIL) {
      console.log('[APPLE REVIEWER] OTP requested for test account');
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: 'OTP code sent (test account)',
          testOtp: '123456'
        })
      };
    }

    // Normal flow
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    // TODO: Store in DynamoDB with TTL
    // TODO: Send email via SES

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'OTP sent' })
    };
  }

  // Verify OTP endpoint
  if (path === '/auth/verify-otp' && httpMethod === 'POST') {
    const { email, otp } = parsedBody;

    if (!email || !otp) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email and OTP are required' })
      };
    }

    const normalizedEmail = email.toLowerCase();

    // Apple reviewer test account
    if (normalizedEmail === APPLE_TEST_EMAIL) {
      if (otp === APPLE_TEST_OTP) {
        console.log('[APPLE REVIEWER] Test account login successful');
        
        // TODO: Generate JWT token
        return {
          statusCode: 200,
          body: JSON.stringify({ success: true, token: '...' })
        };
      } else {
        return {
          statusCode: 401,
          body: JSON.stringify({ error: 'Invalid OTP code' })
        };
      }
    }

    // Normal flow: Verify from DynamoDB
    // TODO: Check DynamoDB for stored OTP

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ error: 'Not found' })
  };
};
```

---

## Important Notes

1. **Security**: The test account logic should only be active in production/staging environments where Apple reviewers will test. Consider using environment variables to enable/disable this.

2. **Logging**: Log all test account usage for monitoring and debugging.

3. **Documentation**: Document the test account credentials in your App Store Connect review notes:
   ```
   Test Account Credentials:
   Email: apple_test@longevro.com
   OTP Code: 123456
   ```

4. **Environment Variables**: Consider moving test credentials to environment variables:
   ```typescript
   const APPLE_TEST_EMAIL = process.env.APPLE_TEST_EMAIL || 'apple_test@longevro.com';
   const APPLE_TEST_OTP = process.env.APPLE_TEST_OTP || '123456';
   ```

5. **Rate Limiting**: Still apply rate limiting to the test account to prevent abuse.

6. **Cleanup**: After App Store approval, you may want to disable or remove the test account logic, or keep it for future reviews.

---

## Testing

Test the flow:
1. Send OTP to `apple_test@longevro.com` → Should return success without sending email
2. Verify OTP `123456` → Should authenticate successfully
3. Verify wrong OTP → Should fail
4. Test normal email flow → Should work as usual



