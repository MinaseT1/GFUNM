// Import fetch for Node.js
import fetch from 'node-fetch';

// Test configuration
const BASE_URL = 'http://localhost:3001'; // Updated to use port 3001
const API_ENDPOINT = `${BASE_URL}/api/contact`;

// Test data
const validTestData = {
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test Email from Contact Form',
    message: 'This is a test message to verify that the contact form email system is working correctly.',
    honeypot: ''
};

const invalidTestData = {
    name: 'A', // Too short
    email: 'invalid-email', // Invalid format
    subject: 'Hi', // Too short
    message: 'Short', // Too short
    honeypot: ''
};

const spamTestData = {
    name: 'Spam Bot',
    email: 'spam@bot.com',
    subject: 'Spam Message',
    message: 'This is a spam message',
    honeypot: 'I am a bot' // Should trigger spam protection
};

// Helper function to make API requests
async function testAPI(testName, data) {
    console.log(`\n🧪 Testing: ${testName}`);
    console.log('📤 Sending data:', JSON.stringify(data, null, 2));
    
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseText = await response.text();
        console.log(`📊 Response Status: ${response.status}`);
        console.log(`📋 Response Headers:`, Object.fromEntries(response.headers.entries()));
        
        let result;
        try {
            result = JSON.parse(responseText);
            console.log(`📄 Response Body:`, JSON.stringify(result, null, 2));
        } catch (parseError) {
            console.log(`📄 Raw Response Body:`, responseText);
            console.log(`❌ JSON Parse Error:`, parseError.message);
        }

        if (response.ok) {
            console.log(`✅ ${testName}: SUCCESS`);
            return { success: true, data: result };
        } else {
            console.log(`❌ ${testName}: FAILED`);
            return { success: false, data: result, status: response.status };
        }
    } catch (error) {
        console.log(`💥 ${testName}: NETWORK ERROR`);
        console.log(`Error details:`, error.message);
        console.log(`Error stack:`, error.stack);
        return { success: false, error: error.message };
    }
}

// Test environment variables
function checkEnvironment() {
    console.log('🔍 Checking Environment Variables:');
    console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? '✅ Set' : '❌ Not set');
    console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL ? '✅ Set' : '❌ Not set');
    console.log('NEXT_PUBLIC_APP_URL:', process.env.NEXT_PUBLIC_APP_URL ? '✅ Set' : '❌ Not set');
}

// Main test function
async function runTests() {
    console.log('🚀 Starting Contact Form API Tests');
    console.log('🌐 API Endpoint:', API_ENDPOINT);
    
    checkEnvironment();
    
    // Test 1: Valid email sending
    const emailTest = await testAPI('Email Sending', validTestData);
    
    // Test 2: Form validation
    const validationTest = await testAPI('Form Validation', invalidTestData);
    
    // Test 3: Spam protection
    const spamTest = await testAPI('Spam Protection', spamTestData);
    
    // Summary
    console.log('\n📊 Test Summary:');
    console.log(`Email Sending: ${emailTest.success ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Form Validation: ${validationTest.success ? '❌ UNEXPECTED' : '✅ PASS (validation working)'}`);
    console.log(`Spam Protection: ${spamTest.success ? '❌ UNEXPECTED' : '✅ PASS (spam blocked)'}`);
    
    if (!emailTest.success) {
        console.log('\n🔧 Troubleshooting Tips:');
        console.log('1. Check if your Resend API key is valid');
        console.log('2. Verify your email address is verified in Resend');
        console.log('3. Check if you have sufficient Resend credits');
        console.log('4. Ensure your domain is properly configured');
        console.log('5. Check the server logs for more details');
    }
}

// Run the tests
runTests().catch(console.error);