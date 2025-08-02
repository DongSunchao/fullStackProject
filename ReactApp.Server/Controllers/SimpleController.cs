

using Microsoft.AspNetCore.Mvc;


namespace ReactApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SimpleController: ControllerBase
    {
        [HttpGet("user")]
        public IActionResult GetProfile()
        {
            return Ok(new { name = "张三", age = 30 });
        }
    }
}
