using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;

namespace PracticeProjectReact.Server.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class EncodingDecodingController:ControllerBase
    {
        
        [HttpPost]
        [Route("Encode64")]
        public IActionResult EncodeData([FromBody] InputData input)
        {
            if (string.IsNullOrWhiteSpace(input.Text))
            {
                return BadRequest("Input is required");
            }

            string encodedData=Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(input.Text));
            return Ok(new {EncodedData=encodedData});   
        }
        [HttpPost]
        [Route("Decode64")]
        public IActionResult DecodeData([FromBody] InputData input)
        {
            try
            {
                int paddingLength = input.Text.Length % 4;
                if (paddingLength != 0)
                {
                    input.Text = input.Text.PadRight(input.Text.Length + (4 - paddingLength), '=');
                }
                if (string.IsNullOrWhiteSpace(input.Text))
                {
                    return BadRequest("Input is required");
                }

                byte[] decodedBytes = Convert.FromBase64String(input.Text);


                string decodedData = Encoding.UTF8.GetString(decodedBytes);
                return Ok(new { DecodedData = decodedData });
            }
            catch (FormatException) 
            {
                return BadRequest("The input text is not a valid Base64 string");
            }
        }
        [HttpPost]
        [Route("EncodeFile")]
        public async Task<IActionResult> EncodeFile(IFormFile formFile)
        {
            if (formFile == null || formFile.Length == 0)
            {
                return BadRequest("No file uploaded");
            }

            string[] AllowedType = { "text/plain","image/png", "image/jpeg", "application/pdf" };
            if (!AllowedType.Contains(formFile.ContentType))
            {
                return BadRequest("File is not applicable to encode");
            }
            long fileSize = 5 * 1024 * 1024;

            if (formFile.Length > fileSize)
            {
                return BadRequest("File size exceed limit");
            }
            byte[] fileByte;
            using (var memoryStream = new MemoryStream())
            {
                await formFile.CopyToAsync(memoryStream);
                fileByte = memoryStream.ToArray();
            }


            string encodedFile = Convert.ToBase64String(fileByte);

            return Ok(new { EncodedFile = encodedFile });
        }


    }

    public class InputData
    {
        public string Text { get; set; } 
    }

}
